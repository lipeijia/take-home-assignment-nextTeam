/**
 * 檢查給定的有向圖是否形成一個簡單循環
 * 
 * 簡單循環的定義：
 * 1. 每個頂點恰好有一條出邊和一條入邊
 * 2. 從任意頂點出發，最終能回到起始點
 * 3. 路徑中每個頂點只被訪問一次
 * 
 * @param {number[]} edgesFrom - 邊的起始頂點陣列
 * @param {number[]} edgesTo - 邊的終點頂點陣列
 * @returns {boolean} 如果形成簡單循環返回 true，否則返回 false
 * 
 * 時間複雜度: O(V) 其中 V 是頂點數量
 * 空間複雜度: O(V) 用於存儲鄰接表和訪問記錄
 */
function solution(edgesFrom, edgesTo) {
  // Step 1: Basic check
  if (edgesFrom.length === 0 || edgesFrom.length !== edgesTo.length)
    return false;

  const edgeCount = edgesFrom.length;
  const nextNode = new Map(); // Adjacency map: u -> v
  const vertices = new Set(); // Unique vertices in the graph

  // Step 2: Build adjacency and collect vertices
  for (let i = 0; i < edgeCount; i++) {
    const u = edgesFrom[i];
    const v = edgesTo[i];

    // In a simple directed cycle, each vertex must have exactly one outgoing edge
    if (nextNode.has(u)) return false;

    nextNode.set(u, v);
    vertices.add(u);
    vertices.add(v);
  }

  const vertexCount = vertices.size;

  // A simple directed cycle must have exactly one edge per vertex
  if (edgeCount !== vertexCount) return false;

  // Step 3: Walk through the cycle starting from any vertex
  const visitedVertices = new Set();
  let currentVertex = edgesFrom[0]; // Start from any known vertex

  for (let i = 0; i < vertexCount; i++) {
    if (visitedVertices.has(currentVertex)) return false;
    visitedVertices.add(currentVertex);

    const next = nextNode.get(currentVertex);
    if (!next) return false; // dead end
    currentVertex = next;
  }

  // Step 4: Must return to start and have visited all vertices exactly once
  return currentVertex === edgesFrom[0] && visitedVertices.size === vertexCount;
}


// Example usage

console.log(
  'solution([1, 3, 2, 4], [4, 1, 3, 2]): ' +
    solution([1, 3, 2, 4], [4, 1, 3, 2])
); //true

console.log('solution([1, 2, 3, 4], [2, 1, 4, 3]): ' + 
    solution([1, 2, 3, 4], [2, 1, 4, 3])
); //false
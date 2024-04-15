function lengthOfLongestSubstring(s: string): number {
  const dic = new Map();
  let res: number = 0;
  let i = -1;
  for (let j = 0; j < s.length; j++) {
    if (dic.has(s[j])) i = Math.max(dic.get(s[j]), i);
    dic.set(s[j], j);
    res = Math.max(res, j - i);
  }
  return res;
}

/*  link - https://leetcode.com/discuss/interview-question/427896/dropbox-phone-screen-implement-getbyclassname-getbyclassnamehierarchy */

const getByClassName = (root, c) => {
    debugger
  const search = (node) => {
    debugger
    let result = [];

    if (node.classList.contains(c)) {
      result.push(node);
    }
    for (let child of node.children) {
      const res = search(child.id);
      result = [...result, ...res];
    }
    return result;
  };
};

const root = document.getElementById("root");
const getIds = (elements=[]) => Array.from(elements).map(x => x.id);

console.log('actual:  ', getIds(getByClassName(root, 'a')));

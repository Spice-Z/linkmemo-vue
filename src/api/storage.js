export const fetchMemoList = async () => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(["memo"], result => {
      resolve(result);
    });
  });
};

export const reserveMemoList = async memoList => {
  console.log('reserve')
  console.log(memoList);
  return new Promise((resolve, reject) => {
    chrome.storage.local.set(
      {
        memo: memoList
      },
      () => {
        resolve("set");
      }
    );
  });
};

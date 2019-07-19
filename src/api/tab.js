export const getTabInfo = () => {
  return new Promise((resolve, reject) => {
    chrome.tabs.getSelected(null, tab => {
      resolve(tab);
    });
  });
};

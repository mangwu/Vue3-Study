/**
 *
 * @param {string} key // 被改变的storage key值
 * @param {string} eventType // 事件类型
 * @param {boolean} canBubble  // 能否冒泡
 * @param {boolean} cancelable  // 能否取消
 */
export default function dispatchStorageEvent(
  key,
  eventType = "storage",
  canBubble = true,
  cancelable = true
) {
  const storageEvent = new StorageEvent(eventType, {
    key,
    cancelable,
    canBubble
  });
  window.dispatchEvent(storageEvent);
}

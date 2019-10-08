export const PUSH_ITEM = 'PUSH_ITEM';

export const pushItem = ({ text }) => ({
  type: PUSH_ITEM,
  payload: { text },
});

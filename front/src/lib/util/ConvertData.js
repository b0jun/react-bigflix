export const runtimeConverter = (runtime) => {
  const hour = Math.floor(runtime / 60);
  const min = runtime % 60;
  return hour === 0 ? `${min}분` : `${hour}시간 ${min}분`;
};

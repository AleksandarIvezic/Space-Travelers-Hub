const getRockets = async () => {
  const request = await fetch('https://api.spacexdata.com/v3/rockets');
  const result = request.json();
  return result;
};

export default getRockets;

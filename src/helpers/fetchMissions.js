const fetchMissions = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions')
  return response.json()
}

export default fetchMissions;

const API_KEY = "0d8ab7cff2692bd014bb25fca16d7158";

export const requests = {
  getNfOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
  getMovies: (endpoints) =>
    `movie/${endpoints}?api_key=${API_KEY}&language=en-US&page=1`,
  getTv: (endpoints) =>
    `tv/${endpoints}?api_key=${API_KEY}&language=en-US&page=1`,

    getVideoDetails: (type) =>
    `${type.platfrom}/${type.id}?api_key=${API_KEY}&language=en-US&page=1&append_to_response=videos`,
   
    getGenre:(platform)=>`genre/${platform}/list?API_key${API_KEY}`
}

export const endpoints = {
  popular: "popular",
  topRated: "top_Rated",
  upcoming: "upcoming",
  nowPlaying: "nowPlaying",
  airingToday: "aringToday",
  onTheAir : "on_the_air"
  
};

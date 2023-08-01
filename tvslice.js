import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { endpoints, requests } from "../../utility/requests"
import axios from "../../utility/axois";

const  initialState ={
    nfOriginals:{
        status:"idle",
        error: null,
        data: null
    },


    popularTv:{
        status:"idle",
        error: null,
        data: null
    },

    topRatedTv:{
        status:"idle",
        error: null,
        data: null
    }
}


    export const fetchNetflixOriginals = createAsyncThunk(
        'tv/fetchNetflixOriginals',
        async () => {
            const response = await axios.get(requests.getNfOriginals);
            return response.data
        }
    )

    
    export const fetchTopRatedTv = createAsyncThunk(
        'tv/fetchTopRatedTv',
        async () => {
            const response = await axios.getTvShows(requests.topRatedTv);
            return response.data
        }
    )

    
    export const fetchPopularTv = createAsyncThunk(
        'tv/fetchPopularTv',
        async () => {
            const response = await axios.getTvShows(endpoints.PopularTvshows);
            return response.data
        }
    )
    
    export const tvSlice = createSlice({
        name: "tv",
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
            .addCase(fetchNetflixOriginals.pending, (state, _action)=>{
                state.nfOriginals.status = 'loading';
            })
            .addCase(fetchNetflixOriginals.fulfilled, (state, action)=>{
                state.nfOriginals.status = 'success';
                state.nfOriginals.data = action.payload;
            })
            .addCase(fetchNetflixOriginals.rejected, (state, action)=>{
                state.nfOriginals.status = 'failed';
                state.nfOriginals.error = action.error;
            })
            .addCase(fetchTopRatedTv.pending, (state, _action)=>{
                state.topRatedTv.status = 'loading';
            })
            .addCase(fetchTopRatedTv.fulfilled, (state, action)=>{
                state.topRatedTv.status = 'success';
                state.topRatedTv.data = action.payload;
            })
            .addCase(fetchTopRatedTv.rejected, (state, action)=>{
                state.topRatedTv.status = 'failed';
                state.topRatedTv.error = action.error;
            } )

            .addCase(fetchPopularTv.pending, (state, _action)=>{
                state.popularTv.status = 'loading';
            })
            .addCase(fetchPopularTv.fulfilled, (state, action)=>{
                state.popularTv.status = 'success';
                state.popularTv.data = action.payload;
            })
            .addCase(fetchPopularTv.rejected, (state, action)=>{
                 state.popularTv.status = 'failed';
                state.popularTv.error = action.error;
            } )
        }
    });
    
export const nfOriginalsSelector=(state)=> state.tv.nfOriginals;
export const topRatedTvSelector=(state)=> state.tv.topRatedTv;
export const popularTvSelector=(state)=> state.tv.popularTv;
 export default tvSlice.reducer;
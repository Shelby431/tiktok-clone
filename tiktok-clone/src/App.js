import React from 'react'
import './App.css';
import Video from './Video';


function App() {
  return (
    //BEM Naming convention
    <div className="app">
      <div className="app__videos">
      <Video url = 'https://img-9gag-fun.9cache.com/photo/aP7qOBg_460svav1.mp4'
      channel = "Shelby431"
      description = "Doggo is fun"
      song = "This song is called Breakfree"
      likes = {136}
      messages = {45}
      shares = {75}
      />
      <Video url = 'https://img-9gag-fun.9cache.com/photo/aD4eRKK_460svav1.mp4'
      channel = "Hellboy"
      description = "Hells Bells"
      song = "ACDC"
      likes = {116}
      messages = {25}
      shares = {51}
      />
      <Video url = 'https://img-9gag-fun.9cache.com/photo/azmpgbz_460svvp9.webm'
      channel = "tuts"
      description = "BOW DOWN"
      song = "ONLY ONE GOD"
      likes = {16}
      messages = {5}
      shares = {7}
      />
      <Video url = 'https://img-9gag-fun.9cache.com/photo/aR7qwKj_460svvp9.webm'
      channel = "Sbender"
      description = "Dope"
      song = "Walkin on sunshine"
      likes = {562}
      messages = {31}
      shares = {50}
      />
      <Video url = 'https://img-9gag-fun.9cache.com/photo/a5W0e6y_460svvp9.webm'
      channel = "FryJ"
      description = "Leela"
      song = "Abercrombie"
      likes = {161}
      messages = {57}
      shares = {87}
      />
      <Video url = 'https://img-9gag-fun.9cache.com/photo/a9ngb5K_460svvp9.webm'
      channel = "Pee-mak"
      description = "FUN"
      song = "pee poo"
      likes = {146}
      messages = {145}
      shares = {750}
      />
      <Video url = 'https://img-9gag-fun.9cache.com/photo/adVD0g9_460svav1.mp4'
      channel = "nunu"
      description = "I GOT SOME GOOD NEWS"
      song = "Stairway to heaven"
      likes = {106}
      messages = {82}
      shares = {54}
      />
      <Video url = 'https://img-9gag-fun.9cache.com/photo/arV7vyK_460svav1.mp4'
      channel = "batty"
      description = "Eat Bat"
      song = "NIB"
      likes = {132}
      messages = {44}
      shares = {45}
      />
      <Video url = 'https://img-9gag-fun.9cache.com/photo/aeD8j9q_460svav1.mp4'
      channel = "Ifarted"
      description = "Beatles"
      song = "Here comes the sun doo du doo"
      likes = {736}
      messages = {445}
      shares = {51}
      />
      <Video url = 'https://img-9gag-fun.9cache.com/photo/aZyObnp_460svav1.mp4'
      channel = "Lele"
      description = "Feels good"
      song = "This song!!!!!!!!"
      likes = {36}
      messages = {45}
      shares = {5}
      />
      </div>
    </div>
  );
}

export default App;

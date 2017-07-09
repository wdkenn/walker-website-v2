import Secrets from '@/secrets'
import Vue from 'vue'
import { get } from 'lodash'

const LASTFM_URL = 'https://ws.audioscrobbler.com/2.0/?method='

export default {
  myRecentTrack: () => {
    return Vue.http.get(
      LASTFM_URL +
      'user.getrecenttracks' +  // method
      '&user=wdkenn' + // user
      '&api_key=' + Secrets.lastFmKey() + // API Key
      '&limit=1' + // limit to 1
      '&format=json' // format
    ).then((response) => {
      return new Promise((resolve) => {
        if (response && Array.isArray(get(response, 'data.recenttracks.track'))) {
          resolve(response.data.recenttracks.track)
        } else {
          resolve([])
        }
      })
    })
  }
}

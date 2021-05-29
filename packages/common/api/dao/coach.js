import axios from '../axios.config';

const getCoachList = ()=>{
  return new Promise((resolve)=>{
    axios.get('/t-coach').then(res=>{
      resolve(res.data?.data)
    }).catch(()=>{
      resolve(false)
    })
  })
}

export default {
  getCoachList
}
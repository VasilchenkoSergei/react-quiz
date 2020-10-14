import axios from 'axios';

export default axios.create({
  baseURL: 'https://react-quiz-95c4f.firebaseio.com/'
})
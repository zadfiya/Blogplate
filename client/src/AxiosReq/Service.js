import axios from 'axios';
import { ApiService } from './ApiPath';
const postService = axios.create({
  baseURL: ApiService.postService,
  headers: {
    'Content-Type': 'application/json',
  },
});

const commentService = axios.create({
    baseURL: ApiService.commentService,
    headers: {
      'Content-Type': 'application/json',
    },
});

export default {
  postService,
  commentService,
};
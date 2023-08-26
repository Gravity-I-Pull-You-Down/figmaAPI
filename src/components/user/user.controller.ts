import { Request, Response } from 'express';
import httpStatus from 'http-status';
import axios from 'axios';
import fs from 'fs';

const getImage = async (req: Request, res: Response) => {
  try {
    let imageURL = req.params.image;
    imageURL =
      'https://www.googleapis.com/drive/v3/files/1WVY17oVcZ92CFyGHD6PdNJIZHvgv2fHE?alt=media';
    console.log('ImageURL', imageURL);
    let image: any = await axios.get(imageURL, {
      responseType: 'arraybuffer',
      headers: {
        'X-goog-api-key': 'AIzaSyCr7yZnMnaY1I_hXisTqy7DPtDCK1eE_YU',
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'media',
        cors: 'no-cors',
        origin: 'local',
      },  
    });
    const img = fs.writeFileSync('temp.png', image.data);
    console.log(typeof image.data, image.data);
    const { data } = image;
    image = image.data;
    image = new Uint8Array(image);
    res.status(httpStatus.OK);
    res.send(image);
  } catch (e) {
    console.log(e);
    res.status(httpStatus.INTERNAL_SERVER_ERROR);
    res.send(e);
  }
};

// eslint-disable-next-line import/prefer-default-export
export { getImage };

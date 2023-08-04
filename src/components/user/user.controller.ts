import { Request, Response } from 'express';
import httpStatus from 'http-status';
import axios from 'axios';

const getImage = async (req: Request, res: Response) => {
  try {
    let imageURL = req.params.image;
    console.log(imageURL);
    imageURL =
      'https://drive.google.com/file/d/1WVY17oVcZ92CFyGHD6PdNJIZHvgv2fHE/view';
    const image = await axios.get(imageURL, {
      // responseType: 'arraybuffer',
      headers: {
        Accept: 'media',
        cors: 'no-cors',
        origin: 'local',
      },
    });
    console.log(image);
    res.status(httpStatus.OK);
    res.send(image.data);
  } catch (e) {
    console.log(e);
    res.status(httpStatus.INTERNAL_SERVER_ERROR);
    res.send(e);
  }
};

export { getImage };

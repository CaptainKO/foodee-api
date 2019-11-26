import { Request, Response, NextFunction } from "express";
import { Image } from "../models/image.model";

export class ImageController {
  public static async uploadImage({file}: Request, res: Response, next: NextFunction) {
    // const image: any = {};
    // image.url = req.file.secure_url;
    // image.id = req.file.public_id;

    try {
      const image = await Image.create({
        publicId: file.public_id,
        url: file.secure_url,
        type: 'recipe'
      });
      res.sendAndWrap(image.toEditObject(), "image");
    } catch (err) {
      next(err);
    }
  
  }
}
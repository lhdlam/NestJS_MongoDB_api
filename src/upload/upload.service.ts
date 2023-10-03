import { Injectable } from '@nestjs/common';
import { ObjectID } from 'mongodb';
import { UploadRepository } from './upload.repository';


@Injectable()
export class UploadService {
  constructor(
    private readonly uploadRepository: UploadRepository
  ){}


  async findAll() {
    return await this.uploadRepository.findAll()
  }

  async upload(file) {
    const objectId = new ObjectID();
    const arr_name = file.originalname.split('.');
    const extension = arr_name.pop();
    const name = arr_name.join('.');
    const key = objectId + '/' + this.slug(name) + '.' + extension;
    const data = {
      _id: objectId,
      name: name,
      file_name: String(file.originalname),
      mime_type: file.mimetype,
      size: file.size,
      key: key,
    };
    return await this.uploadRepository.create(data);
  }

  remove(id: string) {
    return `This action removes a #${id} upload`;
  }
  private slug(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    const from =
      'ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆĞÍÌÎÏİŇÑÓÖÒÔÕØŘŔŠŞŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇğíìîïıňñóöòôõøðřŕšşťúůüùûýÿžþÞĐđßÆa·/_,:;';
    const to =
      'AAAAAACCCDEEEEEEEEGIIIIINNOOOOOORRSSTUUUUUYYZaaaaaacccdeeeeeeeegiiiiinnooooooorrsstuuuuuyyzbBDdBAa------';
    for (let i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str
      .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes

    return str;
  }
}

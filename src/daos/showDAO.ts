import { Show, ShowModel } from "../domains/showModel";

export default class ShowDAO {
  async save(show: Show) {
    const savedShow = await ShowModel.create(show);
    return savedShow;
  }

  async findByTitle(title: string) {
    const regex = new RegExp(title, 'i'); // Para ignorar maiúsculas e minúsculas
    return await ShowModel.find({ title: regex });
  }
}


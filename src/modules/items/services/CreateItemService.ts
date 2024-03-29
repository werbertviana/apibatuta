import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Items from '../typeorm/entities/Items';
import ItemsRepository from '../typeorm/repositories/ItemsRepository';

interface IRequest {
  feed_id: string;
  title: string;
  icon: string;
  position: number;
}

class CreateItemService {
  public async execute({ title, icon, feed_id, position }: IRequest): Promise<Items> {
    
    const itemsRepository = getCustomRepository(ItemsRepository);
    const ItemExists = await itemsRepository.findByTitle(title);
    

    if (ItemExists) {
      throw new AppError('Já existe uma item cadastrado com o mesmo nome');
    }

    const item = itemsRepository.create({
      position,  
      feed_id,
      title,
      icon,
      show_feed: false
    });

    await itemsRepository.save(item);

    return item;
  }
}

export default CreateItemService;
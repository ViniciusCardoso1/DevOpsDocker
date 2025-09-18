import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from './member.entity';
import { CreateMemberDto } from '../dto/create-member.dto';
import { UpdateMemberDto } from '../dto/update-member.dto';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Member)
    private repo: Repository<Member>,
  ) {}

  create(dto: CreateMemberDto) {
    const member = this.repo.create(dto);
    return this.repo.save(member);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const m = await this.repo.findOneBy({ id });
    if (!m) throw new NotFoundException('Member not found');
    return m;
  }

  async update(id: number, dto: UpdateMemberDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const member = await this.findOne(id);
    return this.repo.remove(member);
  }
}

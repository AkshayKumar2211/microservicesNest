import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { DatabaseModule } from '@app/common';
import { ReservationDocument, ReservationSchema } from './entities/reservation.entity';
import { ReservationRepository } from './reservation.repository';

@Module({
  imports: [DatabaseModule,
    DatabaseModule.forFeature([{name:ReservationDocument.name,schema:ReservationSchema}]),
  ],
  controllers: [ReservationController],
  providers: [ReservationService,ReservationRepository],
})
export class ReservationModule {}

import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private http: HttpService) {}

  getVersion() {
    return firstValueFrom(
      this.http
        .get('https://wakfu.cdn.ankama.com/gamedata/config.json')
        .pipe(map((response: any) => response.data.version)),
    );
  }

  async getItems() {
    const version = await this.getVersion();
    const items = await firstValueFrom(
      this.http
        .get(`https://wakfu.cdn.ankama.com/gamedata/${version}/items.json`)
        .pipe(map((response: any) => response.data)),
    );
    const itemTypes = await firstValueFrom(
      this.http
        .get(
          `https://wakfu.cdn.ankama.com/gamedata/${version}/equipmentItemTypes.json`,
        )
        .pipe(map((response: any) => response.data)),
    );
    const effects = await this.http
      .get(`https://wakfu.cdn.ankama.com/gamedata/${version}/actions.json`)
      .pipe(map((response: any) => response.data));

    return items.map((item: any) => {

      console.log('item: ', item)
      return {
        id: item.definition.item.id,
        name: item.title.fr,
        level: item.definition.item.level,
        positions: itemTypes.find(
          (type) => type.id === item.definition.item.itemTypeId,
        ).equipmentPositions,
        picture: `https://static.ankama.com/wakfu/portal/game/item/64/${item.definition.item.graphicParameters.gfxId}.png`
      };
    });
  }
}

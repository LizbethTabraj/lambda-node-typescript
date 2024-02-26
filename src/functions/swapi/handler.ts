

import { middyfy } from '@libs/lambda';
import {getPeople, getPerson } from '@functions/swapi/service';
import { addPersonCloud ,getPeopleCloud} from './conexionBD';






const swapi = async (event) => {
 

let result;

switch(event.resource){
  case '/swapi/person/{id}': result = await getPerson(event);
  break;
  case '/swapi/people': result = await getPeople();
  break;
  case '/cloud/person': result = await addPersonCloud(event);
  break;
  case '/cloud/people': result = await getPeopleCloud();
  break;

}

return {
  statusCode: 200,
  body: JSON.stringify(result),
};
  
};

export const main = middyfy(swapi);
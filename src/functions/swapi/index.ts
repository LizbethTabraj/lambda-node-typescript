
import { handlerPath } from '@libs/handler-resolver';


export default {
    handler: `${handlerPath(__dirname)}/handler.main`,
    events: [
      {
        handlerPath: 'getPerson.main',
        http: {
          method: 'get',
          path: 'swapi/person/{id}',
        },
        
      },
      {
        handlerPath: 'get.main',
        http: {
          method: 'get',
          path: 'swapi/people',
          
        },        
      },
      {
        handlerPath: 'addPerson.main',
        http: {
          method: 'post',
          path: 'cloud/person',
          
        },
        
      },
      {
        handlerPath: 'addPerson.main',
        http: {
          method: 'get',
          path: 'cloud/people',
          
        },
        
      }
    ],
};

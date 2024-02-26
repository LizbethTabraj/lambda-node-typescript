import { middyfy } from '@libs/lambda';
import { getPerson } from './service';

const person= async (event) => {
  
    
    try {
      const result = await getPerson(event);
 
    return {
      statusCode: 200,
      body: result,
    };
    } catch (error) {
      console.log(error)
    }
      
    };
export const main = middyfy(person);
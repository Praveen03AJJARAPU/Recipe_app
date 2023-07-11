import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Details = () => {
  const { val } = useParams();
  const [item, setItem] = useState([]);
  const [arr, setArr] = useState([]);
  const API_ID = "eda84208";
  const API_KEY = "83c134fe67531dc0113e517de409239d";

  const fetchIt = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${val}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const info = await response.json();
    setItem(info.hits[0].recipe);
    
  }

    useEffect(() => {
      
      fetchIt()
      

    },[])
  
  return (
    <div className="main flex justify-center items-center">
      <div className="main mt-10  flex flex-col justify-center  w-1/2.5 p-10 shadow-2xl rounded-2xl">
        <div className="img flex justify-center mb-4">
          <img src={item.image} alt="hi frends" className="object-contain" />
        </div>
        <div className="food_label flex justify-center items-center">
          <p className="text-3xl mr-3">{item.label}</p>
          <p className="bg-slate-800 rounded-2xl text-slate-300 px-3">
            {item.dishType}
          </p>
        </div>
        <div className="content">
          <div className="flex justify-center text-xl mt-5">
            <p className="mr-6">Eat at: {item.mealType}</p>
            <p className="mr-6">Calories: {Math.round(item.calories)}</p>
            <p className="mr-6">Cuisine-Type: {item.cuisineType}</p>
          </div>
        </div>
        <div className="health"></div>
        <div className="ing flex flex-col items-center mt-5 mb-3">
          <p className="text-2xl">Ingredients:</p>
          <ul className="flex flex-col items-center mb-1">
            <li>{item.ingredientLines}</li>
            
          </ul>
        </div>
        <div className="link flex justify-center items-center">
          <div className="sou mr-10">
            <p>
              Source: <span className='text-2xl'>{item.source}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;


// (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0
// : 
// recipe
// : 
// calories
// : 
// 510.70799999999997
// cautions
// : 
// []
// cuisineType
// : 
// ['japanese']
// dietLabels
// : 
// (2) ['Low-Fat', 'Low-Sodium']
// digest
// : 
// (26) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// dishType
// : 
// ['main course']
// healthLabels
// : 
// (24) ['Low Potassium', 'Kidney-Friendly', 'Vegan', 'Vegetarian', 'Pescatarian', 'Dairy-Free', 'Gluten-Free', 'Wheat-Free', 'Egg-Free', 'Peanut-Free', 'Tree-Nut-Free', 'Soy-Free', 'Fish-Free', 'Shellfish-Free', 'Pork-Free', 'Red-Meat-Free', 'Crustacean-Free', 'Celery-Free', 'Mustard-Free', 'Sesame-Free', 'Lupine-Free', 'Mollusk-Free', 'No oil added', 'Kosher']
// image
// : 
// "https://edamam-product-images.s3.amazonaws.com/web-img/000/0006df8303057087bd63fce084a938f4.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLWVhc3QtMSJGMEQCIErsl4GmOgXkXmZbh5Nj8nwDU2yxjxilO2bf7kj0z8MYAiB%2BpHbiNF8hohmpTUaw2uKw76PHDohH6SxRTQM0WfMTKyrBBQi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIM4c8J19GTvU%2BE%2Bc37KpUFiYDODNgpRAwK6ZvOlSq6qbpBodp0ZpBcRuh8pMfSwdK4Ib2uNo4xXwaUyiVhQCNDAC0XfXOQKLm%2FPFLua7gVkyLIRsbkfqe9mntNcc%2BDoNOFDp4oNL1GsJlKW6iVgsNdIgAP%2BFjbJq2Bt1nvVEf6ggij1CZvKa%2FL5OXKLXOR3MA7Q53f%2FBI0gm4Ai6cQls%2BFlvE7CCAobSsdlIbOgzUMl3PwVn8OPxdjFMx1TQ%2FH25SIegXzVHW%2BumAXNUFnHzMCwefn3ysLjgZfPpZiIvAQI69CRyLzIp621PpD4LFvBWr6yBeccMhWmWZeLzXjR%2BkzmFy47aMO7yxFCP6rhM2NYeUMdBluJwT2%2FIBBH19tUf7m71175SfW6OGTNq5%2FAfSbdmaCEqWBIE%2BTOJPIbnYZEe0eY2lOm0q3beBw7M29VHQDbdUh05vg8NtITJ83sDO4cVN39FPd%2FnvmB%2F2rh%2BtybmTaqEuDlXxxamVkUJMFiXskvKjw0igNj%2Fg%2FKcxlyTpcMTffTsUsWM2KbZdMAZUbmyJIBXeC8m5MN2a%2F7i3D7APorLFCU68hAdmg1lZ1RrZp83rNGE6Fg0bSo%2BNPgOi2oE%2FfUB2eyzFOzA%2B9AIyM5bEkYC%2BeqnBikjh6v3EjzZC0soxo5KBUTTKEL34i16dnkN3YH%2FfNDFDKfOR7dD5MdciOASjPzEL3ic3r6AefVTZqI4FuKJft3yI1%2FRKuy65hUVCzF8B%2B1DIPbb5KoKP0%2BrkRCFU1v9%2BsJvFgxt9twhyEqIssmWf9RTfjyfBGHkoiJ5pZZaUdiiSObN18pbluzXIO1gYQBkEiFl2XG2TV%2BdoPvsYkldFgPR%2BMdFc9xoxgKyCrJojG5GluCEIsA0%2B93j7HVEherzCCybSlBjqyAWo2MmJO7lI5an%2B9nl3Kn2olXaHtW7PWorhirDKXCZD2ffDu6mNmyHW3JpUYmbA6uRFbE8YNLpC02PLoaqn3S109A0Kz0iv8U8NnHigZq94Sm%2FQGVT3Toq%2BzYfOw%2BUnhr5DqbavXLoiwHiBVE85QsddwQkCwDkfMa7pSk0JRZVxR290Jon8ZojndJxSQrWqBJ1oA8S3zP0KA%2FHeD15Uw0medUNqsH7mmHlEpZ1DZ8CrDNmM%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230711T111034Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFLGGKTINQ%2F20230711%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9da4c287fa50a8f32e25e2914bdde6602240fe06f18fd513f57f20c3c756e01d"
// ingredientLines
// : 
// (4) ['1 cup Rice Wine Vinegar', '1/2 cup Sugar', '1/4 cup Sake Or Mirin (a Japanese Rice Wine)', '4 cups Short Grain/sushi Rice']
// ingredients
// : 
// (4) [{…}, {…}, {…}, {…}]
// label
// : 
// "Perfect Sushi Rice"
// mealType
// : 
// ['lunch/dinner']
// shareAs
// : 
// "http://www.edamam.com/recipe/perfect-sushi-rice-534ecb116061f126cbe973b901a8c8d8/perfect+sushi+rice"
// source
// : 
// "Pioneer Woman"
// totalDaily
// : 
// {ENERC_KCAL: {…}, FAT: {…}, FASAT: {…}, CHOCDF: {…}, FIBTG: {…}, …}
// totalNutrients
// : 
// {ENERC_KCAL: {…}, FAT: {…}, FASAT: {…}, FATRN: {…}, FAMS: {…}, …}
// totalTime
// : 
// 0
// totalWeight
// : 
// 397
// uri
// : 
// "http://www.edamam.com/ontologies/edamam.owl#recipe_534ecb116061f126cbe973b901a8c8d8"
// url
// : 
// "http://thepioneerwoman.com/cooking/2009/01/perfect-sushi-rice/"
// yield
// : 
// 4
// [[Prototype]]
// : 
// Object
// [[Prototype]]
// : 
// Object
// 1
// : 
// {recipe: {…}}
// 2
// : 
// {recipe: {…}}
// 3
// : 
// {recipe: {…}}
// 4
// : 
// {recipe: {…}}
// 5
// : 
// {recipe: {…}}
// 6
// : 
// {recipe: {…}}
// 7
// : 
// {recipe: {…}}
// 8
// : 
// {recipe: {…}}
// 9
// : 
// {recipe: {…}}
// length
// : 
// 10
import React from 'react';
import Item from './item';
import { Link, useNavigate } from 'react-router-dom';
import Details from './Details';

const List = ({ data }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="items p-7 flex flex-wrap justify-center m-5">
        {data.map((val) => (
            <Item val={val} key={Math.random()}/>
        ))}
      </div>
    </>
  );
}

export default List;

// recipe
// : 
// calories
// : 
// 775.2656624204326
// cautions
// : 
// []
// cuisineType
// : 
// ['chinese']
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
// (29) ['Sugar-Conscious', 'Low Sugar', 'Low Potassium', 'Kidney-Friendly', 'Vegan', 'Vegetarian', 'Pescatarian', 'Mediterranean', 'Dairy-Free', 'Gluten-Free', 'Wheat-Free', 'Egg-Free', 'Peanut-Free', 'Tree-Nut-Free', 'Soy-Free', 'Fish-Free', 'Shellfish-Free', 'Pork-Free', 'Red-Meat-Free', 'Crustacean-Free', 'Celery-Free', 'Mustard-Free', 'Sesame-Free', 'Lupine-Free', 'Mollusk-Free', 'Alcohol-Free', 'Sulfite-Free', 'FODMAP-Free', 'Kosher']
// image
// : 
// "https://edamam-product-images.s3.amazonaws.com/web-img/b71/b716942f16e3e9490829f7da8dba509e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLWVhc3QtMSJHMEUCIAKxZXLgAZeKGC8uvSenSesa%2BtccC%2Fx1tMKOtNm5Iy4gAiEA6884bB0tq1bNI8MjbLuN4wgB0Laa%2Bt%2FihSvWCGPnUcQqwQUIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDEdEykmOUN1D0Kkf7iqVBSGKr79YM%2FmS98Zg5%2F6kOwIpCjUMz4hRW0Yb%2BzXxQE8W%2FgY6NtMAiSv3bygrY7%2FdJlIGROYW3H%2FHKQpd1LmogNF3Pa70Pd2RlsGH8J3AX4JC4fvlZ5ojnmdWzYLbGjpHhmrUByIXf%2F1Os5RdkLR6eGYrUZ5EwDnuufI5wgWqhVSUfPkHNGLwSzXYN4%2FhVHuH1NHk5zt6wzv0WXGKxi5j77XzAigNz6mMsGye7%2FmCHHf2PjVRv3E1jJmri2ZUkTcmfq6xAyVqa9ge0jRS7yqkpR73wvgh2CaOG9ZgnseAYd%2Bwx1LNVfC7qqo6grXS%2FupaewTjukdAnD%2BDlyqdpvF%2BsGwjAzr696%2FDuBVPLbL8yL3yJVUhfR9Af22ez0YMHSLsE6FFiqnv4XN7L9yObx%2FBQNqPjXlvey4Fl1n5PBsGKtpoQ7RGhIhd9JZ5%2F%2FDFDxtUfbxJV1e7aXtn2cgsStrcjzgIgrzoq3qjy3Bh%2FqPkYzZ8SeOaIsXe2c0XBxjGh7yvOzBjIYq4SEUkY7XumiYzs%2FggnRhWskQWJ6FMcoYwSU4z6cr305aun4Ly9kkMxkYfho58os30JKrv1D6BWmN2C2o7VC4PLnmdNZT31AzmU%2BHB7SrR71DIarC85QqmPH4W4FJgowY0dsUUv8aF9MEahn4Q8K%2FMZAS76U8%2FZeDSKIGICGKY4DiOd%2B22OBRfZU5p%2BwTIP7Oxcm2XQCmY2QLJhKCYbwTz5ob%2FdpMiKxjdUJ94rK5n4UUZmMbg6OWPDm8gNjATlUI9o8Lft6Ns7btaMzOLoD5bHu8TwXVlr6EYSmY3gdL7FstaZZ7ebdgbJCSMZNdpcyP9uxTYxdHO4t2KrDscHhC1xnXZAziefuNTqtzRBqtjIr4wkMyypQY6sQG6%2Bq0weyrszyzSu087GOI4rCaqYsqPbTIabCJP1zwwzfCptcgjBe9RpYytUqggvT8p4WlPFuwxXXfH%2BdhkozX0jdi4D%2BqhVJjYOGEP7WOO1Ir7uerub6ebyK%2BEa6wCMv%2BEO3EyxlChTJGnis7W4AeAPfMptOmnpT24qyq6GfRLkLmKgI%2B8jSwGU6ytH9Gd%2F%2B4EU6X17mBYplFx52eo0NiAUMn4IpUqqotDiBj8JKZ1DpI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230711T012027Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFP4L3YD6H%2F20230711%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dca72503479abe3de164343c81abdc8a8a8dcaa5ab9196e88e25d56bbdf54190"
// ingredientLines
// : 
// (4) ['1 cup long-grain white rice', '1 3/4 cup water', 'Pinch of salt', 'Glug of olive oil']
// ingredients
// : 
// (4) [{…}, {…}, {…}, {…}]
// label
// : 
// "Essentials: Rice"
// mealType
// : 
// ['lunch/dinner']
// shareAs
// : 
// "http://www.edamam.com/recipe/essentials-rice-b1957a6a4025b25f6da6aef1fad452d4/rice"
// source
// : 
// "Serious Eats"
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
// 617.6975930708553
// uri
// : 
// "http://www.edamam.com/ontologies/edamam.owl#recipe_b1957a6a4025b25f6da6aef1fad452d4"
// url
// : 
// "http://www.seriouseats.com/recipes/2008/04/essentials-how-to-cook-rice.html"
// yield
// : 
// 4
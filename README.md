<img src="https://s3-us-west-2.amazonaws.com/bambi-data/bambi.png" height="250" align="right">

# BAMBI
**B**entonville **M**erchants **B**usiness **I**ntelligence and **A**nalytics

### Team: 
- [Carsen Beyer](https://www.linkedin.com/in/carsenbeyer/)
- [Kate Cousineau](https://www.linkedin.com/in/kate-cousineau-465268112/)
- [Joe Isabell](https://www.linkedin.com/in/joeisabell/)
- [John Lim](https://www.linkedin.com/in/johnhosacklim/)

## Table of Contents

- [Introduction](#introduction)
- [Data Dictionary](#data-dictionary)
- [Data Preparation](#data-preparation)
- [Data Understanding](#data-understanding)
  - [Tableau](#tableau)
  - [Statistics](#statistics)
- [Model Testing](#model-testing)
  - [Predictive Model](#predictive-model)
- [Model Evaluation](#model-evaluation)
- [Deployment](#deployment)
- [Conclusion](#conclusion)


## Introduction

Bentonville Merchants International (BMI) is a consulting firm for Walmart Suppliers. One of the services that they provide is letting their clients know which products will potentially sale at a given location so that they can maximize profits. To make the decision process of which products are best suited for a given store based on what they already sell, we have created a model through Azure Machine Learning that allows the user to input a store name, item description, and item quantity, then the model will return the top three products the store is not currently selling that would go well with the product the user entered. In knowing what products can be coupled with a high-selling product, BMI will be able to provide much value to their clients in a timely manner. 

## Data Dictionary

**Data Fields** | **Description**
:--- | :---
Item Nbr | Item Number: correlates with an item
Item Desc1 | Item Description: describes what the item is 
Store Nbr | Store Number: number that is assigned to a store
POS Qty | Point-of-Sale Quantity: quantity sold for the whole store in a month
WM Month | Walmart Month: Every month aggregated for the last two years
Dept Category Description | Item Department Category

## Data Preparation

The data has been extracted from Walmart’s Retail Link operational database. Using Walmart’s database had unique challenges. This database contains aggregated supplier data that has been collected from Walmart stores and cleaned. That means that that the dataset used for this experiment has no missing data or null values. Every user and product combination had values, so no data cleaning was required. The ranking that we used, sale quantity, would have 0 rather than null.
Retail Link stores hundreds of fields regarding item, store, sales, inventory, and forecast information for every supplier. The supplier is left with the task to determine which of those fields, if any, will be relevant to making business decision. Oftentimes, the supplier will make decisions based on instinct rather than data driven theories. 

Our goal is to recommend products to stores that they are not currently selling. Which variables are relevant to that type of recommendation? For this type of analysis we need three ingredients: an identifier for the grouping, a product ID, and an indicator of the level of interest. Since we cannot gather transactional level data, we will treat stores as a grouping, and use the monthly sale quantity as the interest level indicator to predict which products will sell in new groupings.

As we created our matchbox recommender, we found that the ranking could not handle negative values, or values over 50. We cleaned the data to remove records that have more returns than sales (negative) and the holiday months that push the ranking beyond 50 (holidays). This was about 5,000 of the 386,000 records.

## Data Understanding

### Tableau

The database was connected to Tableau through a Microsoft Azure SQL Database. With the use of this data we created various graphs and charts to support our project. We later combined them into a dashboard to showcase on the web page. The dashboard shows the following:
- Top 10 Items Most QTY Sold
  - Shows the quantity at the top 10 best selling stores by category. Can be filtered on the web app by category and fine line (Walmart grouping). 
- Top Item for 3 Top Stores By Month
  - Shows the top selling item at the top 10 selling stores along a month-by-month two year span
- Top 10 Items for Top 10 Stores
  - Includes Item description, item category, and POS Qty per store

Dashboard URL: https://public.tableau.com/views/IS415FinalProjectTableau/Dashboard1?:embed=y&:display_count=yes&publish=yes

### Statistics

A correlation matrix can be seen below. We have included the two numeric variables: Store Number and Item Number to predict the POS Qty (the dependent variable). Both the store number and item number have a significant p-value. While the R Square value is slightly lower than expected, it is within the bounds we had hoped for. The item number is the most correlated with the dependent variable; however, the store number is also very highly correlated. Skewness and kurtosis does not relate to our project. 

![Correlation Matrix](https://raw.githubusercontent.com/joeisabell/machine-learning/master/src/assets/model-test-results.png)

## Model Testing

We utilized two types of analyses: **matchbox recommender** and **text analysis**. 

To provide Bentonville Merchants with a practical tool that could be used to service Walmart suppliers, we designed the dataset to ultimately create a matchbox recommender. That means the variables we selected represent the three elements found in a recommender: user, product, and rating. We did not need to perform testing of various algorithms to determine which variables would be used in the predictive model. 

For user, we selected store number. Walmart does not provide suppliers with transaction level data, so we have no information about customers or ‘users.’ Instead we will treat each of the 3,522 Walmart stores in the US.
The product input uses item number because those are the unique identifiers for the products that the supplier sells at Walmart.
The rating input allowed some liberty to choose what measure we would use to make item recommendation, but the choice was obvious because profit is driven by sales. The rating is represented by POS Qty by month, or monthly sales by store. We will take the average sale per month to train the model to know which items sell well with the requested item.

An interesting element that we added to the model was to use the item descriptions provided by the supplier to feed into the product evaluation of the Train Matchbox Recommender. This portion of the model uses the Latent Dirichlet Allocation to categorize the n-grams found in the item descriptions into groups that can be used to compare with the requested item. The tricky element with this data input was that it required a SQL transformation that grouped the topic ratings that would be used to make the prediction.
Both the store item sale quantities and the item description are used as inputs to predict which three items will sell with an item that has a defined POS Qty. The train matchbox recommender uses the inputs to perform different analysis to output the recommended items for the request. 
An overview of the model is depicted below:

### Predictive Model

![Model Diagram](https://raw.githubusercontent.com/joeisabell/machine-learning/master/src/assets/model-diagram.png)


## Model Evaluation

We used the evaluate recommender to evaluate the validity of our model. With the item recommendation set to rated items, the recommender output that our model has an NDCG of 0.606173. This means that the overall quality of the rating is about 60%. With that level of confidence, we can safely determine that the model does a decent job of predicting which items will sell with the selected item.

The evaluate recommender did not produces an RMSE value for this model. Just to reiterate, when we ran a regression on the store and item numbers, we found an R-Squared value of 0.014. That means that those data points are not closely fitted to the regression line.

## Deployment

Bambi is a full stack JavaScript app that uses React on the frontend and Node.js on the backend.
It is single page application (SPA) that showcases the Tableau dashboard with filtering capabilities and the Azure ML web service. The web service is connected to a live Azure SQL Server database that holds updated records for the monthly sales of every store in the US. When new data is loaded into the database, a user can enter the experiment, run the model again, and redeploy the web service to retrain the model. The web app is fully mobile responsive to be used on the go.

- Web App URL: https://bambi.merchantlabs.io/
- Azure Machine Learning Experiment URL: https://gallery.cortanaintelligence.com/Experiment/Bambi-ML-Final

The tableau dashboard was published in a single workbook to tableau public. The URL can be found above along with more information about what the dashboard exhibits under the [Data Understanding](#data-understanding) section and Tableau. 

## Conclusion
Predicting what products will sell in certain stores is one of the things that keeps Bentonville Merchants International in business. In using a combination of Tableau, React, Node, Azure Machine Learning, and a few other components, we have built an application that takes user input and outputs a result. The values that a user will input are store number, item description, and item quantity, then the model will return the top three products the store is not currently selling that would go well with the product the user entered. It has been our pleasure building this application and we look forward to seeing how this technology can be leveraged to provide insights to clients. 

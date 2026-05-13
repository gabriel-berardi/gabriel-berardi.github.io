---
draft: false
layout: post
title: Data Leakage in Machine Learning
date: 2020-12-01
categories: ["Data"]
ShowToc: true
TocOpen: false
---

![](images/img1.jpg)

Recently, I read a thread on Twitter about several Machine Learning papers that contained severe cases of data leakage. The authors of the papers seemed unaware of this phenomenon and 
therefore trained models that performed exceptionally well. Unfortunately, this was mainly due to data leakage.

Not many beginners are aware of this problem and in my opinion, not many courses emphasize this issue early enough. Therefore, I would like to tell you all the things you need to know 
about data leakage and some ways to prevent it in this post.

## What is Data Leakage?

In Machine Learning, we usually split our data into a training and a test set. We use the training set to train our model and review the quality of our model using the test set. This 
should be very clear to everyone. If not, check out this post.

However, some people tend to forget what the test set actually represents: new, unseen data. The whole point of the test set is that it can be used as if it was unknown data on which we 
want to make predictions upon, using our trained model.

Therefore, it is absolutely crucial to separate our training and our test set from each other and avoid leakage from one set to the other. We want to train our model solely based on the 
training set's data.

This may sound a bit abstract at first. To clear things up, let's talk about a few common data leakage mistakes you should avoid.

## Common Types of Data Leakage

### Feature Leakage

Imagine this: you try to predict the annual income of a person based on certain features like age, education background, industry, years of working experience and so on. You divide the 
data into input features and the target feature, namely the column of the data set that contains the annual income for each person, do your train/test split, train the model and get an 
accuracy of 99.99 %.

Unfortunately, you overlooked that one of the input features you fed into the model is 'annual_tax', while another feature is 'tax_quota'. With these two features alone, it is an easy job 
to estimate the annual income of any person, but obviously, this information wouldn't be available in a production environment and your model is likely to perform very poorly without 
these two features!

In other words: you included input features that indirectly represent the target feature and wouldn't be known ex-ante. This is called feature leakage or column-wise leakage!

### Scaling Leakage

Scaling your data means applying a certain function to all entries of the dataset, in order to eliminate differences in the order of magnitude, while still keeping the relative 
information of these data points. We want to keep the original distribution of the data, squeezed into a certain range like 0 to 1 or -1 to 1. Two very common methods of scaling data are 
min-max Normalization and Z-score Normalization.

Scaling leakage happens if we include the test set when determining the parameters to scale the data. In the case of Z-score Normalization, for example, we need to calculate both the mean 
and the standard deviation of the data. Then, we subtract the mean from every data point and divide by the standard deviation.

If we include the test set in the scaling process, we would assume prior knowledge of the test set's distribution, which of course, is a mistake. Therefore, you always need to fit the 
scaler on the training set and only transform the test set using the scaler!

### Time Leakage

Working with time-series data can be tricky for different reasons. Time leakage is just one of them. Imagine you work with data of a company's stock price. For simplicity, we only look at 
the stock price of three days. The stock price at the end of these three days is as follows:

- D1: 110 EUR
- D2: 120 EUR
- D3: 130 EUR

Now let's say D1 and D3 end up in the training set, while we test on D2. This would represent data leakage because we trained our model on future information relative to the test data. We 
would already know that the stock price at D3 is higher than on D1, therefore it is more likely that the stock price on D2 was higher than on D1.

So, when dealing with time-series data, we should always use the more recent data for testing, instead of splitting the data randomly, in order to acknowledge the dependencies in the data.

### Missing Data Leakage

When dealing with missing data, we can either remove the affected entries, delete the whole feature, or find a meaningful way to augment the data. For example, we might replace the 
missing entries with the mode or mean of the other entries with respect to that particular feature. But if we do that before splitting the data, we yet again introduce leakage into our 
training set, because we transfer knowledge of the test set into the training set.

Therefore, we should first do the train/test split, and then use the mode or mean of the training set to fill in missing data in the training set and then use the mode or mean of the test 
set to fill in the missing data in the test set.

### Duplicate Leakage

A final example of data leakage can be found in identical or nearly identical entries in a dataset. If such entries exist, and you randomly split them into training and test data, chances 
are that some identical entries can be found both in the training and the test set, which represents data leakage!

An example of such duplicate entries could be web-scraped customer reviews: Some customers might accidentally publish the same review more than once. An example of nearly duplicate 
entries would be the over- or bootstrap-sampling of a dataset before splitting the data into a training and test set.

To avoid data leakage from (nearly) duplicate entries, you simply need to use a method to detect and delete these entries. One such method for text data is called fuzzy matching.

## Summary

Data leakage can be a difficult thing that even qualified professionals struggle with at times. The above list is by no means complete and unfortunately, there are many more data leakage 
pitfalls out there. However, it is crucial to be aware of it and follow best-practices to avoid data leakage, such as always performing feature engineering after doing the train/test 
split. In general, you should avoid doing anything to your training set that involves having knowledge of the test set. As a rule of thumb: split early and leave the test set untouched 
until you're done training your model.

If you ever feel unsure if a certain action might introduce data leakage to your model, make sure to discuss the matter with colleagues or ask other practitioners or researchers online on 
websites like stats.stackexchange.com, reddit.com/r/MachineLearning or kaggle.com/discussion.

## Sources and Further Material

- https://en.wikipedia.org/wiki/Leakage_(machine_learning)
- https://towardsdatascience.com/data-leakage-in-machine-learning-10bdd3eec742 
- https://www.youtube.com/watch?v=n9jz7G68pVg

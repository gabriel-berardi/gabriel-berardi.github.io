---
draft: false
layout: post
title: Simple Questions, Hard Answers
date: 2024-09-14
categories: ["Data"]
ShowToc: true
TocOpen: false
---

![](images/img1.webp)

When business stakeholders ask data experts seemingly simple questions, they often expect a quick and straightforward answer. On the surface, it seems like a piece of cake. But in the messy reality of data, what appears to be a simple question can quickly turn into a multi-layered onion of a problem - each layer revealing increasing complexity and ambiguity.

**Example from the insurance domain:**

Let's take a practical example from the insurance industry. A sales executive asks:

*"What was the lapse rate (churn rate) of a specific product last year?"*

It seems like a simple question, right? Calculate how many policies lapsed as a percentage of the total policies at the beginning of the year. Easy!

But the moment a data analyst starts thinking into this question, complications begin to surface.

### Step 1: Data Extraction

At first glance, the analyst's job might appear to be as simple as pulling the data from a clean, ready-to-use database. Unfortunately, this is rarely the case, especially in large organizations. In the insurance industry, data is often scattered across multiple operational systems - different systems for various regions, business lines, customer segments and so on.

Each system may store the same information differently. One system might clearly record the exact moment a contract lapsed, while another might blur the lines between true customer lapses and technical migrations. Harmonizing these heterogeneous systems to get consistent data is already a significant challenge (shoutout to all data engineers working on solving these kinds of problems!).

### Step 2: Defining the KPIs

Assuming the data has been extracted and cleaned, the next hurdle arises: What exactly do we mean by "lapse rate"? In business, many key performance indicators (KPIs) are not universally defined, and lapse rate is no exception.

Do we calculate lapse rate based on the number of policies or based on the premium volume of those policies? If we choose premium volume, do we consider premiums before or after taxes? Do we include sales commissions? Should we calculate using the premiums at the beginning of the year, the end of the year, or the average across the year? Or should we take a pro-rata approach, where each policy is weighted according to the length of time it was active at a certain premium level?

As you can see, what seemed like a straightforward question now opens the door to a wide range of follow-up questions that must be clarified.

### Step 3: Contract Timing Considerations

Even if we focus purely on the number of contracts, complexities arise. For example, how do we treat contracts that lapsed early in the year versus those that lapsed at the very end? Should a contract that was active for nearly the entire year and lapsed on December 31st be treated the same as one that lapsed on January 2nd?

Some might argue that contracts should be weighted by the time they were active during the year. A contract lapsed in January barely impacts the year's overall performance, while one that lapses in December may have contributed significantly.

The payment frequency of the contract - whether monthly, quarterly, or yearly - also plays a role. Should we treat a yearly payment plan the same as a monthly one when calculating the lapse rate?

### Step 4: Managing Ambiguity

By now, what seemed like a simple question has grown increasingly complex. Each answer leads to new questions, and the data analyst must navigate this ambiguity carefully.

While data professionals are trained to think analytically and consider all possibilities, this can also lead to overcomplicating the analysis:

> A key part of the data analyst's role is not only to answer these questions but also to determine when additional granularity no longer adds value to the analysis.

They must communicate with business stakeholders to clarify the purpose behind the question and agree on what level of detail is necessary. Here, Data Analysts that are more familiar with the industry they are working in have a huge advantage!

### Communicating with Stakeholders

One of the most critical aspects of data analysis is managing expectations. Analysts must not only plunge into the data and address technical nuances but also communicate effectively with the business. Understanding the "why" behind the question can help analysts determine the most appropriate methodology for the analysis.

For example, when a stakeholder asks for a lapse rate, are they primarily interested in the overall health of the product portfolio? Or are they looking to assess the financial performance in terms of premium volume?

Having a clear understanding of the stakeholder's goals will guide the analyst in making decisions about how much detail is necessary.

> Business stakeholders can make the job of Data Analysts much easier by providing as much information as possible, when raising data questions.

Open dialogue is essential to prevent misalignment. Without it, the analyst could spend days perfecting an overly detailed calculation, only to discover that the stakeholder only needed a rough estimate to make a quick decision.

### The Role of Data Governance

Data governance plays an important role in all of this, by reducing ambiguity and facilitating more efficient data work. In an ideal scenario, data governance provides clear (but simple!) guidelines for data work, as well as definitions for KPIs, that can be applied consistently across the organization.

For instance, a robust data governance framework would include well-documented definitions for lapse rate, outlining whether it's calculated based on number of contracts or premium volume, and specifying how those premiums should be treated - before or after taxes, with or without commissions, and so on.

By establishing these guidelines, organizations can prevent a situation where two analysts arrive at different results for the same KPI simply because they made different assumptions.

However, it's important to use data governance in moderation! Governance should aim to support and standardize analysis, not impose excessive bureaucracy. In many organizations, data governance is viewed as cumbersome, earning a reputation for adding complexity rather than simplifying workflows.

The goal of data governance should be to strike a balance: providing clarity where needed, while allowing enough flexibility for analysts to adapt to specific business needs.

### Turning Complexity into Clarity

At first glance, business questions often appear simple. But as we've seen, the path to answering them is often fraught with complexity, especially in the world of data. For data analysts, the challenge is not only to navigate these complexities but also to communicate effectively with stakeholders to ensure the analysis serves its purpose.

By encouraging communication and leveraging effective data governance practices, organizations can turn this complexity into actionable insights - helping businesses make better, more informed decisions without getting lost in the data weeds.

In the end, while simple questions can lead to hard answers, the value lies in finding the right balance between depth and efficiency, ensuring that data drives meaningful business outcomes.

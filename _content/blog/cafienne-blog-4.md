---
title: 'Achieving our goals'
description: |
  Achieving a goal in Qollaboris shown using a Milestone. In this post, we will look more in-depth at Milestones.
images: ['cafienne-blog-4/milestone_head.jpg']
date: '2017-09-22'
tags: ['Qollabor']
author: 'Han van Oostende'
---

In our previous [post](cafienne-blog-3), we looked at sentries and how they can be used to trigger other events to occur.
Sentries can be attached to tasks, but there are other plan items, such as **Milestones**, where sentries are useful. As shown below, a **milestone** is represented by a rectangle shape with rounded ends.  
![model highlighted milestones](cafienne-blog-4/model_milestone.jpg)

A **Milestone** represents an achievable target. They can be used to show that a certain goal has been reached in the case.

The conditions that must be met to achieve a milestone can be clearly defined by attaching a sentry to it. In the example below, we see the “Approved” milestone with an attached sentry. In the properties window, we can see that this milestone is reached if the approval status is equal to “approved”.  
![if part milestone](cafienne-blog-4/milestone.jpg)

A **Milestone** can also be used as an entry criteria for other plan items.
In the example below, the “Send approval to requestor” task is triggered when the “Disapproved” milestone occurs:
![milestone as entry](cafienne-blog-4/milestone_as_entry.jpg)

Milestones are beneficial plan items in a case, because they allow us to assess a case’s progress. They are not associated with work like a task is, but rather indicate certain conditions have been reached within a case.

As demonstrated in the case model below, by reading this article, you have completed your very own milestone, “Mastered Milestone Topic”. Congratulations!

![milestone](cafienne-blog-4/milestone_cmmn_joke.png)

[Next week](cafienne-blog-5), we’ll explore the concepts of Stages and Event Listeners as we continue to build a deeper understanding of CMMN.

[Han van Oostende](https://www.linkedin.com/in/hvoostende), DevOps Engineer at SpronQ

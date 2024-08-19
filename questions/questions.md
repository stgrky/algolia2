_Question 1_

From: marissa@startup.com  
Subject: Bad design

Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Thanks,  
Marissa

---

Hi Marissa,

Thank you for reaching out and sharing your feedback about the new dashboard design, and sorry to hear you find the changes inconvenient.

I will make sure to give your feedback to our product team in the form of a feature request ticket. In the meantime, I encourage to you check out our documentation on our [delete indices API](https://www.algolia.com/doc/guides/sending-and-managing-data/manage-indices-and-apps/manage-indices/how-to/delete-indices/#delete-indices-with-the-api). This might provide a possible solution to improve your iterative process.

Again, thank you for the feedback, and do not hesitate to reach out again with any additional questions, concerns or feedback.

Best, Grant

_Question 2_:

From: carrie@coffee.com  
Subject: URGENT ISSUE WITH PRODUCTION!!!!

Since today 9:15am we have been seeing a lot of errors on our website. Multiple users have reported that they were unable to publish their feedbacks and that an alert box with "Record is too big, please contact enterprise@algolia.com".

Our website is an imdb like website where users can post reviews of coffee shops online. Along with that we enrich every record with a lot of metadata that is not for search. I am already a paying customer of your service, what else do you need to make your search work?

Please advise on how to fix this. Thanks.

---

Hi Carrie,

Sorry to hear you are seeing issues on your website. Thank you for reaching out here; I have a few questions and also some suggestions on how we can mitigate.

What is the metadata you are sending to every record? If it is not for search, is there a specific reason you need to send the extra metadata? Removing this metadata would greatly reduce the size of each record. If removing is not a possibility, you could consider storing the non-searchable data elsewhere, such as a separate database.

If the non-searchable metadata is crucial and cannot/ should not be touched, I would encourage you to speak with our sales team about additional features that are built for high-complexity use cases, such as increasing your record size.

Please let us know how you would like to proceed. We are here to answer additional questions and help in any way we can!

Best, Grant Kyle

_Question 3_:

From: marc@hotmail.com  
Subject: Error on website

Hi, my website is not working and here's the error:

![error message](./error.png)

Can you fix it please?

---

Hi Marc,

Thank you for reaching out. This appears to be related to your searchkit package. We should be able to get your site back up with a few troubleshooting steps:

1. Make sure you have Searchkit installed (yarn install searchkit or npm install searchkit)
2. After ensuring it's installed, make sure your import statements are correct (import Searchkit from "searchkit"), and ensure that there are no typos where you imnport (should be searchkit, one word, lower-case in quotation marks)
3. If you're using a bundler like Webpack or Parcel, make sure the searchkit library is in the bundle.

Please follow these steps and reach back out to let me know it's been resolved, or let me know if you need additional help!

Best, Grant

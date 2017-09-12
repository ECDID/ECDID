Database as a Service Rundown
==============================

## The Rub 
* Google Cloud Platform (GCP) 
	* Created October 6, 2011
	* Initially developed to power Google products like Youtube and 
Search.
	* Managed by Google, now allows anyone to host.
	* Supports Node.js, Java, Ruby, C#, Go, Python, and PHP.
* Amazon Web Services
	* Created in 2006
	* Offers extensive computing services
		* Deployment, mobile networking
	* Managed by Amazon
	* Amazon Lambda supports Node.js (JavaScript), Python, Java (Java 8 compatible), and C# (.NET Core)
* Microsoft Azure
	* Created 2011
	* Similar to Amazon
	* Managed by Microsoft
* Heroku
	* Founded 2007
	* Hosting Service Focused on Apps
	* Supports Java, Node.js, Scala, Clojure, Python, PHP, & Go
	

## Pricing
* Google Cloud Platform
	* No upfront costs, pay-as-you-go
	* No Termination Fees
	* Claims to be 30-60% Cheaper than Amazon
	* https://cloud.google.com/pricing/
* Microsoft Azure 
	* No Upfront costs, per-minute billing
	* No Termination Fees
	* https://azure.microsoft.com/en-us/pricing/
* Amazon
	* Can be purchased on-demand (hourly)
	* The premium option
	* https://aws.amazon.com/ec2/dedicated-hosts/pricing/
* Heroku
	* https://www.heroku.com/pricing
	* Cheap options available, 10M rows for $9/mo

## Storage
* Amazon
	* Considered the superior option, called Amazon S3
	* Built to "collect, store, and analyze data - regardless of format – all at massive scale"
	* 99.999999999% Durability
	* Customer include Netflix, Airbnb, Zillow

## Conclusion

Our selection of DBMS should be based on the requirements that are set by our sponsor. Given that we do not have a solid idea of the necessary components needed, I recommend we continue with our own server until we reach the point where we are equipped to make a decision. I feel as if a budget option like Heroku may be in our interest given the client’s desire for economy and the low lookup-rate of our product. 

# code-pipeline-with-cdk-example

Steps to use this code:
```
# Clone or copy the content of this repo

# Create a connection with Codestar and github (It has to be authorized JUST to the right repository)

# Modify the ARN of the newly created Codestar Connection (Or store the Giyhub Key on AWS Secrets)

# Install dependencies in cdk_code
npm i

# Create the repository and commit the code there
git add .
git commit -m
git push


# Deploy the Codepipeline Stack using Deploy
cdk deploy

# Monitor the Pipeline


```
La arquitectura base de este Pipeline es:
![Diagrama de ingesta](https://github.com/JugueDev/code-pipeline-with-cdk-example/blob/main/images/arq.jpg?raw=true)

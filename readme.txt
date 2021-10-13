Note: all below steps run on project folder 

Reference video from Step 1 through 2.2 (1-2.2) : https://www.youtube.com/watch?v=FnC--5WB8ow

Step 1: initiate type script project
        command: npm init 
        creates a package.json with default settings
Step 2: initiate webdriver.io -- steps avaliable in : https://webdriver.io/docs/gettingstarted

Step 2.1 : initiate webdriver : to setup default files and add dependencies along with webdriver download, dependent node modules aswell. 
            Command: npm install @wdio/cli
Step 2.2 : initiate Webdriver configuration : with selection of different configurations of Framework, language, reporting tools etc.
            Command: npx wdio config

Part 2: https://www.youtube.com/watch?v=WdePAfsPiM4

Step 3: Executing tests which generated with previous steps or framework steps
        Command : npx wdio wdio.conf.ts

Generating step definations using chrom extension "tidy gherkin'

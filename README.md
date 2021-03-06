## Solr-search
Different SOLR Search example and POC

## Start Solr Server
--> cd solr-6.6.0
1. Linux :  bin/solr start
2. Window : bin\solr.cmd start
3. With different port : solr start -p 8984

## Stop Solr
bin/solr stop -p 8983

## Check if Solr is running
bin/solr status

## Reference :
1. https://gist.github.com/maxivak/3e3ee1fca32f3949f052
2. http://www.codewrecks.com/blog/index.php/2013/04/29/loading-data-from-sql-server-to-solr-with-a-data-import-handler/
3. https://lucene.apache.org/solr/guide/6_6/running-solr.html
4. https://wiki.apache.org/solr/DataImportHandler

## Create solr core using terminal (need root access)
### Linux : su - solr -c "/opt/solr/bin/solr create -c testcore -n data_driven_schema_configs"
### Windows : solr create -c anycorename -n data_driven_schema_configs
  NOTE : We need to start solr before creating core

## Access Solr
http://localhost:8983/solr/

## Once Core is created we need to do following changes :
1. Goto solr-6.0.0/server/solr/<core-name>/lib
2. Download following jars and place it here -
  a. mssql-jdbc-6.1.0.jre8
  b. solr-dataimporthandler-6.6.0
  c. solr-dataimporthandler-extras-6.6.0
3. Now Goto solr-6.0.0/server/solr/<core-name>/conf
4. Make changes to following file, you can place these files from this repo/conf folder
  a. data-import.xml
  b. managed-schema
  c. solrconfig.xml
5. Restart Solr --> solr restart -p 8983
6. Go to http://localhost:8983/solr/
7. you can see core core dropdown.
8. Once core is created a directory is automatically generated at (solr-6.6.0\server\solr) with following important files in conf (1. solrconfig.xml, 2. managed-schema.xml).

## Data Import setting :
1. create a data-import.xml file in conf folder of your core. Refer in this repo for example. (You can give any name of this file)
2. Edit solrconfig.xml to configure data-import file (the name you provided in step 1). Add following line :
```xml
  <lib dir="../lib/" regex="solr-dataimporthandler-\d.*\.jar" />
	<requestHandler name="/dataimport" class="org.apache.solr.handler.dataimport.DataImportHandler">
    <lst name="defaults">
    <str name="config">data-import.xml</str>
    </lst>
	</requestHandler>
```
3. Restart Solr.

## Add fields in managed-schema
1. Start SOLR
2. Select core
3. Goto Scheme menu option
4. Click Add Field
5. Give Field name and type and Check relevent checkbox

## Indexing
1. Go To http://localhost:8983/solr/#
2. Select core from dropdown
3. Click dataimport
4. Click Execute.




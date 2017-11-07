## Solr-search
Different SOLR Search example and POC

## Start Solr Server
--> cd solr-6.6.0
Linux :  bin/solr start
Window : bin\solr.cmd start
With different port - solr start -p 8984

## Stop Solr
bin/solr stop -p 8983

## Check if Solr is running
bin/solr status

## Reference :
1. https://gist.github.com/maxivak/3e3ee1fca32f3949f052
2. http://www.codewrecks.com/blog/index.php/2013/04/29/loading-data-from-sql-server-to-solr-with-a-data-import-handler/
3. https://lucene.apache.org/solr/guide/6_6/running-solr.html
4. https://wiki.apache.org/solr/DataImportHandler

## Create solr using terminal (need root access)
### Linux : su - solr -c "/opt/solr/bin/solr create -c testcore -n data_driven_schema_configs"
### Windows : solr create -c <name> -n data_driven_schema_configs
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

## Indexing
1. GO TO http://localhost:8983/solr/#
2. Select core from dropdown
3. Click dataimport
4. Click Execute.




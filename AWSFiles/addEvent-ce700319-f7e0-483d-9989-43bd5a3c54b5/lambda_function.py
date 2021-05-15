import pymysql
import json
import os
#Bryan Doucette
#Configuration Values
endpoint = 'database-1.cwkkj1dzotqk.us-east-2.rds.amazonaws.com'
username = 'admin'
password = 'AnneOfNdongo'
database_name = 'DB'

#Connection
connection = pymysql.connect(endpoint, user=username, passwd=password, db=database_name)

def lambda_handler(event, context):
#def handler():
    
    print("Running...")
    print(event)
    event2 = event.get('body')
    print(event2)
    event1 = json.loads(event2)
    print(event1)
    currEID = event1.get('EventID')
    print(currEID)
    currName = event1.get('EventName')
    print(currName)
    currEDescription = event1.get('EventDescription')
    print(currEDescription)
    currSDate = event1.get('StartDateTime')
    print(currSDate)
    currEDate = event1.get('EndDateTime')
    print(currEDate)

    cursor = connection.cursor()
    cursor.execute("INSERT INTO CalendarEvents (EventID, EventName, EventDescription, StartDateTime, EndDateTime) VALUES (" + str(currEID) + ",'" + currName + "','" + currEDescription + "','" + currSDate + "','" + currEDate + "');")
    connection.commit()
    return {
        'statusCode': 200,
        'body': json.dumps('Event Added!')
    }
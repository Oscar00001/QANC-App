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
    print(eventt1)
    currATitle = event1.get('AnnouncementTitle')
    print(currATitle)
    currADescription = event1.get('AnnouncementDescription')
    print(currADescription)
    currDate = event1.get('PostedDateTime')
    print(currDate)

    cursor = connection.cursor()
    cursor.execute("INSERT INTO Announcements (AnnouncementTitle, AnnouncementDescription, PostedDateTime) VALUES (" + currATitle + "','" + currADescription + "','" + currDate + "');") 
    connection.commit()
    return {
        'statusCode': 200,
        'body': json.dumps('Announcement Added!')
    }
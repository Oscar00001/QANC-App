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
    currAID = event1.get('AnnouncementID')
    print(currAID)
    currAGroup = event1.get('Group')
    print(currAGroup)
    currATitle = event1.get('AnnouncementTitle')
    print(currATitle)
    currADescription = event1.get('AnnouncementDescription')
    print(currADescription)
    currDate = event1.get('PostedDateTime')
    print(currDate)

    cursor = connection.cursor()
    #cursor.execute("UPDATE Announcements SET (Group, AnnouncementTitle, AnnouncementDescription, PostedDateTime) VALUES (" + currAGroup + ",'" + currATitle + "','" + currADescription + "','" + currDate + "') WHERE (AnnouncementID='" + currAID +"' );") 
    cursor.execute("UPDATE Announcements SET AnnouncementGroups = '" + currAGroup + "' , AnnouncementTitle = '" + currATitle + "', AnnouncementDescription = '" + currADescription + "', PostedDateTime = '" + currDate + "' WHERE (AnnouncementID=" + currAID + ");")
    connection.commit()
    return {
        'statusCode': 200,
        'body': json.dumps('Announcement Edit!')
    }
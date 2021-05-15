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
    currPass = event1.get('keyword')
    print(currPass)

    cursor = connection.cursor()
    
    cursor.execute('SELECT * FROM Keyword')
    response = cursor.fetchall()
    print(response)
    
    response = json.dumps(response)
    response = json.loads(response)
    
    tup1 = response[0]
    tup2 = response[1]
    
    tup1Pass = tup1[0]
    print(tup1Pass)
    tup2Pass = tup2[0]
    print(tup2Pass)
    
    #cursor.execute("DELETE FROM Keyword WHERE (keyID=15);")
    #cursor.execute("INSERT INTO Keyword (keyword) VALUES ('" + currPass + "');") 
    #cursor.execute("INSERT INTO (Keyword) (keyword) VALUES ('" + currPass + "');") 
    #cursor.execute("UPDATE Keyword SET (keyword) VALUES ('" + currPass + "') WHERE (keyID='17');")
    #cursor.execute("UPDATE Keyword SET (keyID) VALUES ('16') WHERE (keyword='QueenAnnNzinga');")
    cursor.execute("UPDATE Keyword SET keyword = '" + currPass + "' WHERE (keyID>1);")
    
    connection.commit()
    return {
        'statusCode': 200,
        'body': json.dumps('Password Changed!')
    }
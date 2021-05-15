import pymysql
import json

#Configuration Values
endpoint = 'database-1.cwkkj1dzotqk.us-east-2.rds.amazonaws.com'
username = 'admin'
password = 'AnneOfNdongo'
database_name = 'DB'

#Connection
connection = pymysql.connect(endpoint, user=username, passwd=password, db=database_name)

def lambda_handler(event, context):
#def handler():

	cursor = connection.cursor()
	cursor.execute('SELECT * from Keyword')
	rows=cursor.fetchall()
	#cursor.execute("INSERT INTO Keyword (keyword) VALUES ('QueenAnnNzinga1234');") 
	#cursor.execute("DELETE FROM Keyword WHERE (keyID=15);")
	#connection.commit()
	data = {}
	i = 0
	for row in rows:
		print("{0} {1}".format(row[0], row[1]))
		data[i] = [str(row[0]), str(row[1])]
		i = i + 1
	print(data)
	
	return {
        'statusCode': 200,
        'body': json.dumps(data)
    }
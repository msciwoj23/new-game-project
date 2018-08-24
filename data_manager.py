import persistence

from psycopg2 import sql, Binary

@persistence.connection_handler
def change_field(cursor, player, field_id):
    cursor.execute(("""
                    UPDATE rooms
                    SET field%s = %s
                    WHERE id=1; 
                """), (field_id, player))
                   


@persistence.connection_handler
def refresh(cursor):
    cursor.execute("""
                    SELECT * FROM rooms
                    WHERE id = 1;
                """)
                   
    user_id = cursor.fetchall()
    return user_id


@persistence.connection_handler
def reset(cursor):
    cursor.execute(
                """
                    UPDATE rooms
                    SET field1=' ', field2=' ', field3=' ', field4=' ', field5=' ', field6=' ', field7=' ', field8=' ', field9=' '
                    WHERE id=1; 
                """)




@persistence.connection_handler
def getBoards(cursor, user_id):
    cursor.execute(
        sql.SQL("""
                    SELECT * FROM boards
                    WHERE boards_users_id = %(user_id)s;
                """), {'user_id': user_id}
                   )
    list_of_dicts = cursor.fetchall()
    return list_of_dicts

package Banking_System;
 import java.io.*;
 import java.util.*; 
class User implements Serializable
 {
 String username; String password; double balance;
 public User(String username, String password, double balance) 
{
 this.username = username; this.password = password; 
this.balance = balance;
 }
 }
 public class BankingSystem { static final String FILE_NAME = "users.dat";
 static HashMap<String, User> users = new HashMap<>(); 
static Scanner sc = new Scanner(System.in); 
public static void main(String[] args)
 { 
loadUsers();
 while (true)
 { 
System.out.println("\n1. Register\n2. Login\n3. Exit"); 
int choice = sc.nextInt();
 switch (choice) 
{
 case 1: register(); break; 
case 2: login();
 break; 
case 3: saveUsers(); 
System.exit(0);
 default: System.out.println("Invalid choice"); 
}
 }
 }
 static void register() 
{ 
System.out.print("Enter username: "); 
String username = sc.next();
 if (users.containsKey(username)) 
{
 System.out.println("User already exists!"); 
return;
 }
 System.out.print("Enter password: ");
 String password = sc.next(); 
users.put(username, new User(username, password, 0)); 
saveUsers(); 
System.out.println("Registration successful!");
 } 
static void login()
 {
 System.out.print("Enter username: ");
 String username = sc.next(); 
System.out.print("Enter password: ");
 String password = sc.next(); 
User user = users.get(username);
 if (user != null && user.password.equals(password))
 {
 System.out.println("Login successful!");
 userMenu(user); 
}
 else 
{
 System.out.println("Invalid credentials!"); 
}
 }
 static void userMenu(User user) 
{
 while (true)
 {
 System.out.println("\n1. Deposit\n2. Withdraw\n3. Check Balance\n4. Logout");
 int choice = sc.nextInt();
 try { switch (choice)
 { 
case 1: System.out.print("Enter amount: "); 
double deposit = sc.nextDouble();
 if (deposit <= 0) throw new Exception("Invalid amount"); 
user.balance += deposit;
 saveUsers(); 
break;
 case 2: System.out.print("Enter amount: ");
 double withdraw = sc.nextDouble(); 
if (withdraw > user.balance) throw new Exception("Insufficient balance"); 
user.balance -= withdraw;
 saveUsers(); 
break; 
case 3: System.out.println("Balance: " + user.balance);
 break; 
case 4: return;
 default: System.out.println("Invalid choice");
 }
 }
 catch (Exception e) { System.out.println("Error: " + e.getMessage()); 
}
 }
 }
 static void saveUsers() 
{
 try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(FILE_NAME)))
 {
 oos.writeObject(users); 
}
 catch (IOException e)
 {
 System.out.println("Error saving data"); 
}
 }
 static void loadUsers() 
{
 try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(FILE_NAME)))
 {
 users = (HashMap<String, User>) ois.readObject();
 }
 catch (Exception e) { users = new HashMap<>();
 }
 }
 }
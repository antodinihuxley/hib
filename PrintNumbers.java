import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public class PrintNumbers {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		printAllNumbers (Arrays.asList(1,5,3,6,7,4));
		
		
		
	}

	private static void printAllNumbers(List<Integer> numbers) {
		
		numbers.stream()
			.forEach(PrintNumbers::print); // Method Referrence
		
		
	}

	
	private static void print(int num) {
		System.out.println(num);
	}
	

}

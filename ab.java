import java.util.*;

public class ab {
    public static int[] findFarthestSmallerElement(int[] arr) {
        int n = arr.length;
        Stack<Integer> stack = new Stack<>();
        int[] distances = new int[n];
        Arrays.fill(distances, -1);
        
        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && arr[stack.peek()] >= arr[i]) {
                stack.pop();
            }
            if (!stack.isEmpty()) {
                distances[i] = stack.peek();
            }
            stack.push(i);
        }
        
       
        
        return distances;
    }
    
    public static void main(String[] args) {
        int[] arr = {3, 1, 5, 2, 4};
        int[] distances = findFarthestSmallerElement(arr);
        for (int i = 0; i < distances.length; i++) {
            System.out.print(distances[i] + " ");
        }
    }
}

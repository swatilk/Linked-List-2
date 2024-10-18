// Time Complexity : O(N)
// Space Complexity : O(1)
// Did this code successfully run on Leetcode : Yes
// Any problem you faced while coding this : No


// Your code here along with comments explaining your approach

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let reverse = function(head) {
        let prev = null;
        let curr = head;
        while(curr !== null) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        return prev;
    }
    //get middle of list
    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    //slow will be at middle of linked list now

    fast = reverse(slow.next);
    slow.next = null; //pointing to null to make this is the end of first half of linked list
    slow = head;

    //pointer on reversed list will be reaching null first so for odd length, reversed list will be smaller, for even length both will be same size
    while(fast !== null) {
        let temp = slow.next;
        slow.next = fast;
        fast = fast.next;
        slow.next.next = temp;
        slow = temp;
    }
};
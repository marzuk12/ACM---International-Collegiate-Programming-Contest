from shared import get_line_as_ints


class Node:
    def __init__(self, value):
        self.value = value
        self.children = []
        self.short_depth = 0
        self.parent = None

    def add(self, node):
        # TODO adjust to only reset when adding to rightmost child
        self.short_depth = 0
        # Check if this node can take more children
        if not self.is_full():
            self.children.append(node)
            node.parent = self
            return

        # Check if any of this nodes immediate children are not full
        for child in self.children:
            if not child.is_full():
                child.add(node)
                return

        # If they are not all same depth put in leftmost child with lower depth
        first_depth = self.children[0].get_short_depth()
        for i in range(1, len(self.children)):
            if self.children[i].get_short_depth() < first_depth:
                self.children[i].add(node)
                return

        # All equal add to first child
        self.children[0].add(node)

    def get_short_depth(self):
        if (self.short_depth == 0) and (len(self.children) > 0):
            self.short_depth = 0 if not self.is_full() else \
                1 + self.children[-1].get_short_depth()
        return self.short_depth

    def is_full(self):
        return len(self.children) >= Tree.max_children

    def __repr__(self):
        return f"{self.value} ({len(self.children)})"

    def child_dist(self, other):
        """Returns the distance to a child node otherwise -1"""
        if other == self:
            return 0

        for child in self.children:
            dist = child.child_dist(other)
            if dist >= 0:
                return dist + 1

        return -1


class Tree:
    max_children = 1  # To be overwritten in constructor

    def __init__(self, max_children):
        Tree.max_children = max_children
        self.map = {}
        self.root = Node(1)
        self.map.update(((1, self.root),))

    def add(self, value):
        node = Node(value)
        self.map.update(((value, node),))
        self.root.add(node)

    def distance(self, v1, v2):
        if v1 < v2:
            small = v1
            big = v2
        else:
            small = v2
            big = v1

        big = self.map.get(big)
        result = 0
        curr_node = self.map.get(small)
        while curr_node is not None:
            child_dist = curr_node.child_dist(big)
            if child_dist >= 0:
                return result + child_dist
            curr_node = curr_node.parent
            result += 1

        raise Exception("Unable to find node")


def main():
    split = get_line_as_ints()
    n = split[0]
    k = split[1]
    q = split[2]
    tree = Tree(k)
    for i in range(2, n + 1):
        tree.add(i)

    for i in range(q):
        values = get_line_as_ints()
        print(tree.distance(values[0], values[1]))


if __name__ == "__main__":
    main()

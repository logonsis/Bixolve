import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import {
  Loader2,
  LogOut,
  Search,
  Download,
  Trash2,
  Mail,
  Phone,
  Building,
  Calendar,
  ArrowLeft,
  RefreshCw,
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

interface Enquiry {
  id: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  message: string | null;
  created_at: string;
}

const Admin = () => {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [filteredEnquiries, setFilteredEnquiries] = useState<Enquiry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  const fetchEnquiries = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('consultation_enquiries')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching enquiries:', error);
      toast({
        title: 'Error',
        description: 'Failed to load enquiries.',
        variant: 'destructive',
      });
    } else {
      setEnquiries(data || []);
      setFilteredEnquiries(data || []);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (user) {
      fetchEnquiries();
    }
  }, [user]);

  useEffect(() => {
    let filtered = enquiries;

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (e) =>
          e.name.toLowerCase().includes(term) ||
          e.email.toLowerCase().includes(term) ||
          e.company?.toLowerCase().includes(term) ||
          e.phone?.includes(term)
      );
    }

    if (dateFilter) {
      filtered = filtered.filter((e) =>
        e.created_at.startsWith(dateFilter)
      );
    }

    setFilteredEnquiries(filtered);
  }, [searchTerm, dateFilter, enquiries]);

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from('consultation_enquiries')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete enquiry.',
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Deleted',
        description: 'Enquiry has been removed.',
      });
      setEnquiries(enquiries.filter((e) => e.id !== id));
    }
  };

  const handleExport = () => {
    const headers = ['Name', 'Email', 'Company', 'Phone', 'Message', 'Date'];
    const csvContent = [
      headers.join(','),
      ...filteredEnquiries.map((e) =>
        [
          `"${e.name}"`,
          `"${e.email}"`,
          `"${e.company || ''}"`,
          `"${e.phone || ''}"`,
          `"${e.message?.replace(/"/g, '""') || ''}"`,
          `"${new Date(e.created_at).toLocaleDateString()}"`,
        ].join(',')
      ),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `enquiries_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();

    toast({
      title: 'Exported',
      description: `${filteredEnquiries.length} enquiries exported to CSV.`,
    });
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (loading || (!user && !loading)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Site
            </Button>
            <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground hidden sm:block">
              {user?.email}
            </span>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-card rounded-xl p-6 border border-border">
            <p className="text-sm text-muted-foreground">Total Enquiries</p>
            <p className="text-3xl font-bold text-foreground">{enquiries.length}</p>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border">
            <p className="text-sm text-muted-foreground">This Month</p>
            <p className="text-3xl font-bold text-foreground">
              {enquiries.filter((e) => {
                const date = new Date(e.created_at);
                const now = new Date();
                return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
              }).length}
            </p>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border">
            <p className="text-sm text-muted-foreground">Filtered Results</p>
            <p className="text-3xl font-bold text-foreground">{filteredEnquiries.length}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-xl p-4 border border-border mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, email, company, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="w-full sm:w-48"
            />
            <div className="flex gap-2">
              <Button variant="outline" onClick={fetchEnquiries}>
                <RefreshCw className="w-4 h-4" />
              </Button>
              <Button onClick={handleExport} disabled={filteredEnquiries.length === 0}>
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : filteredEnquiries.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <p className="text-lg">No enquiries found</p>
              <p className="text-sm">Enquiries will appear here when customers submit the consultation form.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Contact</TableHead>
                    <TableHead className="hidden md:table-cell">Company</TableHead>
                    <TableHead className="hidden lg:table-cell">Message</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="w-[80px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredEnquiries.map((enquiry) => (
                    <TableRow key={enquiry.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium text-foreground">{enquiry.name}</p>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Mail className="w-3 h-3" />
                            <a href={`mailto:${enquiry.email}`} className="hover:text-primary">
                              {enquiry.email}
                            </a>
                          </div>
                          {enquiry.phone && (
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Phone className="w-3 h-3" />
                              <a href={`tel:${enquiry.phone}`} className="hover:text-primary">
                                {enquiry.phone}
                              </a>
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {enquiry.company ? (
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Building className="w-3 h-3" />
                            {enquiry.company}
                          </div>
                        ) : (
                          <span className="text-muted-foreground/50">—</span>
                        )}
                      </TableCell>
                      <TableCell className="hidden lg:table-cell max-w-xs">
                        <p className="truncate text-sm text-muted-foreground" title={enquiry.message || ''}>
                          {enquiry.message || '—'}
                        </p>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {new Date(enquiry.created_at).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete Enquiry</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete the enquiry from {enquiry.name}? This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDelete(enquiry.id)}
                                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Admin;
